"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import {
  insertTicketSchema,
  selectTicketSchemaType,
  type insertTicketSchemaType,
} from "@/zod-schemas/tickets";
import { selectCustomerSchemaType } from "@/zod-schemas/customer";

type Props = {
  customer: selectCustomerSchemaType;
  ticket?: selectTicketSchemaType;
};

export default function TicketForm({ customer, ticket }: Props) {
  const defaultValues: insertTicketSchemaType = {
    id: ticket?.id || "(New)",
    customerId: ticket?.customerId || 0,
    title: ticket?.title || "",
    description: ticket?.description || "",
    completed: ticket?.completed || false,
    tech: ticket?.tech || "unassigned",
  };

  const form = useForm<insertTicketSchemaType>({
    mode: "onBlur",
    resolver: zodResolver(insertTicketSchema),
    defaultValues,
  });

  async function submitForm(data: insertTicketSchemaType) {
    //logic
    console.log(data);
  }

  return (
    <div className="flex flex-col gap-1 sm:px-8">
      <div>
        <h2 className="text-lg font-semibold">
          {ticket?.id ? `Edit Ticket #${ticket.id}` : "New Ticket"}
        </h2>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submitForm)}
          className="flex flex-col gap-4 sm:gap-7"
        >
          <p>{JSON.stringify(form.getValues())}</p>
        </form>
      </Form>
    </div>
  );
}
