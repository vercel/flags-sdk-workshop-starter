import { FreeDelivery } from "@/app/free-delivery";
import { DevTools } from "@/components/dev-tools";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";

export default async function Layout(props: {
  children: React.ReactNode;
  params: Promise<{
    code: string;
  }>;
}) {
  return (
    <div className="bg-white">
      <FreeDelivery />
      <Navigation />
      {props.children}
      <Footer />
      <DevTools />
    </div>
  );
}
