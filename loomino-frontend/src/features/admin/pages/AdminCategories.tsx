import { useState } from "react";
import { LayoutGrid, Plus, Pencil, Trash2 } from "lucide-react";

import { getMediaUrl } from "@/lib/utils";
import AdminPageHeader from "../components/AdminPageHeader";
import AdminTable, {
  type Column,
} from "../components/AdminTable";
import AdminModal from "../components/AdminModal";
import AdminButton from "../components/AdminButton";
import AdminField from "../components/AdminField";
import { useCrud } from "../hooks/useCrud";
import {
  listCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../services/catalog.service";
import type { AdminCategory } from "../types/catalog";

function AdminCategories() {
  const {
    query,
    createMutation,
    updateMutation,
    deleteMutation,
  } = useCrud<AdminCategory, Partial<AdminCategory>>(
    "categories",
    {
      list: listCategories,
      create: createCategory,
      update: updateCategory,
      remove: deleteCategory,
    },
    "Category",
  );

  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] =
    useState<AdminCategory | null>(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [order, setOrder] = useState("0");

  const openCreate = () => {
    setEditing(null);
    setName("");
    setDescription("");
    setOrder("0");
    setModalOpen(true);
  };

  const openEdit = (cat: AdminCategory) => {
    setEditing(cat);
    setName(cat.name);
    setDescription(cat.description ?? "");
    setOrder(String(cat.display_order));
    setModalOpen(true);
  };

  const submit = () => {
    const payload = {
      name,
      description,
      display_order: Number(order) || 0,
      is_active: true,
    };
    if (editing) {
      updateMutation.mutate(
        { id: editing.id, payload },
        { onSuccess: () => setModalOpen(false) },
      );
    } else {
      createMutation.mutate(payload, {
        onSuccess: () => setModalOpen(false),
      });
    }
  };

  const columns: Column<AdminCategory>[] = [
    {
      header: "Icon",
      cell: (c) =>
        c.icon_image ? (
          <img
            src={getMediaUrl(c.icon_image) ?? ""}
            alt={c.name}
            className="h-9 w-9 rounded-md object-cover"
          />
        ) : (
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[#F0E9DA] text-[12px] text-[#A88548]">
            {c.name[0]}
          </span>
        ),
    },
    {
      header: "Name",
      cell: (c) => (
        <span className="font-medium text-[#2C2418]">
          {c.name}
        </span>
      ),
    },
    {
      header: "Products",
      cell: (c) => (
        <span className="text-[#8A7C64]">
          {c.product_count}
        </span>
      ),
    },
    {
      header: "Order",
      cell: (c) => (
        <span className="text-[#8A7C64]">
          {c.display_order}
        </span>
      ),
    },
    {
      header: "Actions",
      className: "text-right",
      cell: (c) => (
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={() => openEdit(c)}
            aria-label="Edit"
            className="rounded-md p-2 text-[#6B5E48] hover:bg-[#F0E9DA]"
          >
            <Pencil size={16} />
          </button>
          <button
            type="button"
            onClick={() => {
              if (confirm(`Delete "${c.name}"?`))
                deleteMutation.mutate(c.id);
            }}
            aria-label="Delete"
            className="rounded-md p-2 text-[#9A3B3B] hover:bg-[#F7ECEC]"
          >
            <Trash2 size={16} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="font-loomino">
      <AdminPageHeader
        icon={<LayoutGrid size={20} />}
        title="Categories"
        subtitle="Manage product categories and sub-categories"
        action={
          <AdminButton onClick={openCreate}>
            <Plus size={16} /> Add Category
          </AdminButton>
        }
      />

      <AdminTable
        columns={columns}
        rows={query.data ?? []}
        keyField={(c) => c.id}
        isLoading={query.isLoading}
        isError={query.isError}
        emptyMessage="No categories yet."
      />

      <AdminModal
        open={modalOpen}
        title={editing ? "Edit Category" : "Add Category"}
        onClose={() => setModalOpen(false)}
      >
        <AdminField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. T-Shirts"
        />

        <label className="mb-4 block">
          <span className="mb-1.5 block text-[13px] font-medium text-[#3A2E1B]">
            Description
          </span>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            className="w-full rounded-lg border border-[#DDD3C0] bg-white p-3 text-[14px] outline-none focus:border-[#A88548]"
          />
        </label>

        <AdminField
          label="Display Order"
          type="number"
          value={order}
          onChange={(e) => setOrder(e.target.value)}
        />

        <p className="mb-2 text-[12px] text-[#A89A80]">
          Banner &amp; icon images can be uploaded from the
          product admin; image upload UI is coming next.
        </p>

        <div className="mt-4 flex justify-end gap-3">
          <AdminButton
            variant="outline"
            onClick={() => setModalOpen(false)}
          >
            Cancel
          </AdminButton>
          <AdminButton
            onClick={submit}
            disabled={
              createMutation.isPending ||
              updateMutation.isPending
            }
          >
            {editing ? "Save Changes" : "Add Category"}
          </AdminButton>
        </div>
      </AdminModal>
    </div>
  );
}

export default AdminCategories;
