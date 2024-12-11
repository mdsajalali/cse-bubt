import ContactForm from "@/components/core/contact/ContactForm";
import Cover from "@/components/shared/Cover";

export default function page() {
  return (
    <div>
      <Cover
        heading="Contacts"
        title="Contact"
        mainTitle="home"
        titleLink="/"
      />
      <ContactForm />
    </div>
  );
}
