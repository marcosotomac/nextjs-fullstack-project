import { getCustomer } from "@/lib/queries/getCustomer";
import { getTicket } from "@/lib/queries/getTicket";
import { BackButton } from "@/components/BackButton";
import TicketForm from "./TicketForm";

export default async function TicketFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  try {
    const { customerId, ticketId } = await searchParams;

    if (!customerId && !ticketId) {
      return (
        <div>
          <h2 className="text-2xl mb-2 ">No customer or ticket ID provided.</h2>
        </div>
      );
    }

    //new ticket form

    if (customerId) {
      const customer = await getCustomer(parseInt(customerId));

      if (!customer) {
        return (
          <div>
            <h2 className="text-2xl mb-2 ">Customer not found.</h2>
          </div>
        );
      }

      if (!customer.active) {
        return (
          <div>
            <h2 className="text-2xl mb-2 ">Customer is not active.</h2>
            <BackButton title="Go back" variant="secondary" />
          </div>
        );
      }

      // Return ticket form for new ticket
      return <TicketForm customer={customer} />;
    }

    if (ticketId) {
      const ticket = await getTicket(parseInt(ticketId));

      if (!ticket) {
        return (
          <div>
            <h2 className="text-2xl mb-2 ">Ticket not found.</h2>
          </div>
        );
      }

      const customer = await getCustomer(ticket.customerId);

      //return ticket form for editing
      return <TicketForm customer={customer} ticket={ticket} />;
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to get ticket: ${error.message}`);
    }
  }
}
