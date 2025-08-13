import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";

export const metadata = {
  title: "Page Not Found - Computer Repair Shop",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Hero Image */}
        <div className="relative mx-auto w-full max-w-md">
          <Image
            src="/notfound.png"
            alt="Computer with sad face - Page not found"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
            priority
          />
        </div>

        {/* Error Content */}
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-foreground">404</h1>
          <h2 className="text-3xl font-semibold text-foreground">
            System Error Detected
          </h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Looks like this page crashed! Our computer seems as confused as you
            are. Let&apos;s get you back to working territory.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="/home" className="flex items-center gap-2">
              <HomeIcon className="h-5 w-5" />
              Return Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
