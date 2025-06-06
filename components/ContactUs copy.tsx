import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const ContactUss: React.FC = () => (
    <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">Get in Touch</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    Ready to take the next step in your IT career? We're here to help you succeed.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <Card className="border-slate-200">
                        <CardContent className="p-8">
                            <form className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="firstName" className="text-sm font-medium text-slate-700">
                                            First Name
                                        </label>
                                        <Input id="firstName" placeholder="Enter your first name" className="border-slate-300" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="lastName" className="text-sm font-medium text-slate-700">
                                            Last Name
                                        </label>
                                        <Input id="lastName" placeholder="Enter your last name" className="border-slate-300" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-slate-700">
                                        Email
                                    </label>
                                    <Input id="email" type="email" placeholder="Enter your email" className="border-slate-300" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-slate-700">
                                        Message
                                    </label>
                                    <Textarea
                                        id="message"
                                        placeholder="Tell us about your career goals or how we can help you..."
                                        className="border-slate-300 min-h-[120px]"
                                    />
                                </div>
                                <Button className="w-full bg-slate-800 hover:bg-slate-700 text-white">
                                    Send Message
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-8">
                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Mail className="h-6 w-6 text-yellow-500" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-800 mb-1">Email Us</h3>
                                <p className="text-slate-600">hello@techyrecruit.com</p>
                                <p className="text-slate-600">careers@techyrecruit.com</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Phone className="h-6 w-6 text-yellow-500" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-800 mb-1">Call Us</h3>
                                <p className="text-slate-600">+1 (555) 123-4567</p>
                                <p className="text-slate-500 text-sm">Mon-Fri 9AM-6PM PST</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <MapPin className="h-6 w-6 text-yellow-500" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-800 mb-1">Visit Us</h3>
                                <p className="text-slate-600">123 Tech Street, Suite 400</p>
                                <p className="text-slate-600">San Francisco, CA 94105</p>
                            </div>
                        </div>
                    </div>

                    <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center">
                        <div className="text-center text-slate-500">
                            <MapPin className="h-12 w-12 mx-auto mb-2 opacity-50" />
                            <p className="text-sm">Interactive Map Placeholder</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default ContactUss;