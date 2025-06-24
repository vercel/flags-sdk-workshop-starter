import { DevTools } from "@/components/dev-tools";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";

export default async function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="bg-white">
      <Navigation />
      {props.children}
      <Footer />
      <DevTools />
    </div>
  );
}
