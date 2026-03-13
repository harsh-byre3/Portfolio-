// @ts-nocheck
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hhonade@gmail.com",
    href: "mailto:hhonade@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8010028645",
    href: "tel:+918010028645",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    href: "#",
  },
];

export const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      "0740e877-4275-4769-a5d8-74f8d212ca65"
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          type: "success",
          message:"Message sent successfully! I'll get back to you soon.",
        });
        event.target.reset();
      } else {
        setSubmitStatus({
          type: "error",
          message: data.message,
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    }

    setIsLoading(false);
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in"> Get In Touch </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's build something great
          </h2>
         <p className="text-muted-foreground animate-fade-in animation-delay-200"> Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can work together. </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* FORM */}
          <div className="glass p-8 rounded-3xl border border-primary/30">
            <form className="space-y-6" onSubmit={handleSubmit}>

              <input type="hidden" name="subject" value="New Contact Message" />

              <div>
                <label className="block text-sm mb-2">Name</label>
                <input
                  name="name"
                  required
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl border"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Email</label>
                <input
                  name="email"
                  required
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-xl border"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-xl border resize-none"
                />
              </div>

              <Button
                className="w-full"
                type="submit"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>

              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3 p-4 rounded-xl ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 text-green-400"
                      : "bg-red-500/10 text-red-400"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <AlertCircle className="w-5 h-5" />
                  )}
                  <p>{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-6">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>

              {contactInfo.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>

                  <div>
                    <div className="text-sm text-muted-foreground">
                      {item.label}
                    </div>
                    <div className="font-medium">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="glass rounded-3xl p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">Currently Available</span>
              </div>

              <p className="text-sm text-muted-foreground">
               I'm currently open to new opportunities and exciting projects. Whether you need a full-time engineer or a freelance consultant,
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};