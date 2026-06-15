import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center bg-dark px-6 text-center">
        <p className="font-display text-8xl font-light text-bordeaux">404</p>
        <h1 className="mt-6 font-display text-3xl font-light tracking-tight text-ivory md:text-4xl">
          Page not found.
        </h1>
        <p className="mt-4 text-ivory/50">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-10">
          <Button href="/">Back to Home</Button>
        </div>
      </main>
      <Footer />
    </>
  );
}
