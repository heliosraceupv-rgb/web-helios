import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { contactSchema, type InsertContactMessage } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/lib/use-language";

export default function Contact() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({ title: t("contact.successTitle"), description: t("contact.successDescription") });
      form.reset();
    },
    onError: (error) => {
      toast({ title: t("contact.errorTitle"), description: error.message, variant: "destructive" });
    },
  });

  return (
    <div className="min-h-screen bg-[#0d0f14]">

      {/* Page header */}
      <div className="relative overflow-hidden py-20">
        <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d0f14] pointer-events-none" />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl font-black text-white mb-4 tracking-tight">
              {t("contact.title")}
            </h1>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="h-[3px] w-10 rounded-full bg-yellow-500" />
              <div className="h-[3px] w-5 rounded-full bg-yellow-500/50" />
              <div className="h-[3px] w-2 rounded-full bg-yellow-500/25" />
            </div>
            <p className="text-white/50 max-w-xl mx-auto text-base leading-relaxed whitespace-pre-line">
              {t("contact.subtitle")}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Form card */}
      <div className="container pb-24 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
        >
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit((data) => mutation.mutate(data))}
              className="space-y-6"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white/70 font-medium">{t("contact.nameLabel")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("contact.namePlaceholder")}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-yellow-500/50 focus:ring-yellow-500/20 transition-colors duration-200"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white/70 font-medium">{t("contact.emailLabel")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("contact.emailPlaceholder")}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-yellow-500/50 focus:ring-yellow-500/20 transition-colors duration-200"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white/70 font-medium">{t("contact.messageLabel")}</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={t("contact.messagePlaceholder")}
                        className="min-h-[150px] bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-yellow-500/50 focus:ring-yellow-500/20 transition-colors duration-200 resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                size="lg"
                className="btn-shimmer w-full bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-yellow-500/20"
                disabled={mutation.isPending}
              >
                {mutation.isPending ? t("contact.sendingButton") : t("contact.submitButton")}
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </div>
  );
}
