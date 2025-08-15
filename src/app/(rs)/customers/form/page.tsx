import { getCustomer } from "@/lib/queries/getCustomer";
import { BackButton } from "@/components/BackButton";

export default async function CustomerFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  try {
    const { customerId } = await searchParams;
    if (customerId) {
      const customer = await getCustomer(parseInt(customerId));

      if (!customer) {
        return (
          <div>
            <h2 className="text-2xl mb-2">
              Customer Id {customerId} not found
            </h2>
            <BackButton title="Go Back" variant="outline" />
          </div>
        );
      }
      console.log(customer);
    }
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(`Failed to get customer: ${e.message}`);
    }
  }
}
