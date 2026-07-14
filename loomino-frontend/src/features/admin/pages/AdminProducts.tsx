import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Package, Trash2 } from "lucide-react";
import { toast } from "sonner";

import { formatPrice, getMediaUrl } from "@/lib/utils";
import { getApiErrorMessage } from "@/lib/apiError";
import AdminPageHeader from "../components/AdminPageHeader";
import AdminTable, { type Column } from "../components/AdminTable";
import StatusBadge from "../components/StatusBadge";
import {
  listProducts,
  deleteProduct,
} from "../services/commerce.service";
import type { AdminProduct } from "../types/commerce";

function AdminProducts() {
  const queryClient = useQueryClient();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["admin", "products"],
    queryFn: listProducts,
  });

  const del = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["admin", "products"],
      });
      toast.success("Product deleted.");
    },
    onError: (e) =>
      toast.error(
        getApiErrorMessage(e, "Couldn't delete product."),
      ),
  });

  const columns: Column<AdminProduct>[] = [
    {
      header: "Product",
      cell: (p) => (
        <div className="flex items-center gap-3">
          {p.thumbnail ? (
            <img
              src={getMediaUrl(p.thumbnail) ?? ""}
              alt={p.name}
              className="h-10 w-10 rounded-md object-cover"
            />
          ) : (
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[#F0E9DA] text-[12px] text-[#A88548]">
              {p.name[0]}
            </span>
          )}
          <span className="font-medium text-[#2C2418]">
            {p.name}
          </span>
        </div>
      ),
    },
    {
      header: "Category",
      cell: (p) => (
        <span className="text-[#6B5E48]">
          {p.category ?? "—"}
        </span>
      ),
    },
    {
      header: "Stock",
      cell: (p) => (
        <span className="text-[#6B5E48]">
          {p.total_stock}
        </span>
      ),
    },
    {
      header: "Price",
      cell: (p) => (
        <div className="flex items-center gap-2">
          <span className="font-semibold text-[#2C7A4B]">
            {formatPrice(p.discount_price ?? p.regular_price)}
          </span>
          {p.discount_price && (
            <span className="text-[12px] text-[#A89A80] line-through">
              {formatPrice(p.regular_price)}
            </span>
          )}
        </div>
      ),
    },
    {
      header: "Status",
      cell: (p) => (
        <StatusBadge
          status={p.is_active ? "Active" : "Inactive"}
        />
      ),
    },
    {
      header: "Actions",
      className: "text-right",
      cell: (p) => (
        <div className="flex justify-end gap-2">
          <button
            type="button"
            aria-label="Delete"
            onClick={() => {
              if (confirm(`Delete "${p.name}"?`))
                del.mutate(p.id);
            }}
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
        icon={<Package size={20} />}
        title="Products"
        subtitle="Manage your store catalog and inventory"
      />
      <AdminTable
        columns={columns}
        rows={data ?? []}
        keyField={(p) => p.id}
        isLoading={isLoading}
        isError={isError}
        emptyMessage="No products yet."
      />
    </div>
  );
}

export default AdminProducts;
