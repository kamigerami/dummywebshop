'use client';

import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';
import { ArrowLeft, ArrowRight, Trash2, Truck, CreditCard } from 'lucide-react';
import { useState } from 'react';

// Mock cart data with the featured Sage machine
const INITIAL_CART = [
    { ...products[0], quantity: 1 }
];

type CheckoutStep = 'CART' | 'SHIPPING' | 'SUCCESS';

export default function CartPage() {
    const [cartItems, setCartItems] = useState(INITIAL_CART);
    const [step, setStep] = useState<CheckoutStep>('CART');
    const [isCheckingOut, setIsCheckingOut] = useState(false);

    // Shipping State
    const [shippingMethod, setShippingMethod] = useState<'standard' | 'express'>('standard');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        postalCode: '',
    });

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const shippingCost = shippingMethod === 'standard' ? 0 : 99;
    const total = subtotal + shippingCost;

    const handleRemove = (id: string) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleProceedToShipping = () => {
        setStep('SHIPPING');
    };

    const handlePayment = () => {
        setIsCheckingOut(true);
        // Simulate API call
        setTimeout(() => {
            setIsCheckingOut(false);
            setStep('SUCCESS');
            setCartItems([]);
        }, 2000);
    };

    if (step === 'SUCCESS') {
        return (
            <div className="min-h-screen py-20 bg-stone-50">
                <div className="container mx-auto max-w-lg px-4 text-center">
                    <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10 text-green-600">
                        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h1 className="mb-4 font-serif text-3xl font-bold text-stone-900">Tack för din beställning!</h1>
                    <p className="mb-8 text-stone-600">
                        Din order har mottagits och behandlas nu. En orderbekräftelse har skickats till din e-post.
                    </p>
                    <div className="rounded-lg bg-white p-6 text-left border border-stone-200 shadow-sm">
                        <h3 className="mb-4 font-bold text-stone-900 border-b border-stone-100 pb-2">Orderdetaljer</h3>
                        <div className="space-y-2 text-sm text-stone-600">
                            <p><span className="font-medium">Ordernummer:</span> #EH-{Math.floor(Math.random() * 1000000)}</p>
                            <p><span className="font-medium">Kund:</span> {formData.firstName} {formData.lastName}</p>
                            <p><span className="font-medium">Leveransadress:</span> {formData.address}, {formData.postalCode} {formData.city}</p>
                            <p><span className="font-medium">Leveransmetod:</span> {shippingMethod === 'standard' ? 'Standardfrakt (Fri)' : 'Expressfrakt'}</p>
                        </div>
                    </div>
                    <Link
                        href="/"
                        className="mt-8 inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Fortsätt handla
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-20">
            <div className="container mx-auto px-4 sm:px-6">
                <h1 className="mb-12 font-serif text-4xl font-bold text-stone-900">
                    {step === 'CART' ? 'Din Varukorg' : 'Frakt & Betalning'}
                </h1>

                {cartItems.length === 0 && step === 'CART' ? (
                    <div className="text-center py-20 rounded-xl bg-white border border-stone-200 border-dashed">
                        <p className="mb-4 text-xl text-stone-500">Din varukorg är tom</p>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 rounded-full bg-amber-600 px-6 py-3 font-bold text-white transition-colors hover:bg-amber-500 shadow-sm"
                        >
                            Börja handla
                        </Link>
                    </div>
                ) : (
                    <div className="grid gap-12 lg:grid-cols-3">
                        <div className="lg:col-span-2 space-y-8">
                            {step === 'CART' ? (
                                // Cart Items List
                                <div className="space-y-4">
                                    {cartItems.map((item) => (
                                        <div key={item.id} className="flex gap-4 rounded-xl bg-white p-4 border border-stone-200 shadow-sm">
                                            <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-stone-100">
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="flex flex-1 flex-col justify-between">
                                                <div className="flex justify-between">
                                                    <h3 className="font-bold text-stone-900">{item.name}</h3>
                                                    <p className="font-serif font-bold text-stone-900">{item.price}:-</p>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <div className="text-sm text-stone-500">Antal: 1</div>
                                                    <button
                                                        onClick={() => handleRemove(item.id)}
                                                        className="text-stone-400 hover:text-red-500 transition-colors"
                                                    >
                                                        <Trash2 className="h-5 w-5" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                // Shipping Form
                                <div className="rounded-xl bg-white p-6 border border-stone-200 shadow-sm space-y-6">
                                    <h2 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                                        <Truck className="h-5 w-5 text-amber-600" />
                                        Leveransinformation
                                    </h2>

                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <label htmlFor="firstName" className="text-sm font-medium text-stone-700">Förnamn</label>
                                            <input
                                                id="firstName"
                                                type="text"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                                className="w-full rounded-md border border-stone-200 px-3 py-2 text-stone-900 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="lastName" className="text-sm font-medium text-stone-700">Efternamn</label>
                                            <input
                                                id="lastName"
                                                type="text"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                                className="w-full rounded-md border border-stone-200 px-3 py-2 text-stone-900 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="address" className="text-sm font-medium text-stone-700">Adress</label>
                                        <input
                                            id="address"
                                            type="text"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            className="w-full rounded-md border border-stone-200 px-3 py-2 text-stone-900 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                                        />
                                    </div>

                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <label htmlFor="postalCode" className="text-sm font-medium text-stone-700">Postnummer</label>
                                            <input
                                                id="postalCode"
                                                type="text"
                                                name="postalCode"
                                                value={formData.postalCode}
                                                onChange={handleInputChange}
                                                className="w-full rounded-md border border-stone-200 px-3 py-2 text-stone-900 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="city" className="text-sm font-medium text-stone-700">Stad</label>
                                            <input
                                                id="city"
                                                type="text"
                                                name="city"
                                                value={formData.city}
                                                onChange={handleInputChange}
                                                className="w-full rounded-md border border-stone-200 px-3 py-2 text-stone-900 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium text-stone-700">E-post</label>
                                            <input
                                                id="email"
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full rounded-md border border-stone-200 px-3 py-2 text-stone-900 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="phone" className="text-sm font-medium text-stone-700">Telefon</label>
                                            <input
                                                id="phone"
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="w-full rounded-md border border-stone-200 px-3 py-2 text-stone-900 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                                            />
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-stone-100">
                                        <h3 className="mb-4 text-lg font-bold text-stone-900">Fraktalternativ</h3>
                                        <div className="space-y-3">
                                            <div className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-all ${shippingMethod === 'standard' ? 'border-amber-600 bg-amber-50' : 'border-stone-200 hover:border-amber-200'}`}>
                                                <label htmlFor="shipping-standard" className="flex items-center gap-3 w-full cursor-pointer" aria-label="Standardfrakt">
                                                    <input
                                                        id="shipping-standard"
                                                        type="radio"
                                                        checked={shippingMethod === 'standard'}
                                                        onChange={() => setShippingMethod('standard')}
                                                        className="text-amber-600 focus:ring-amber-500"
                                                    />
                                                    <div>
                                                        <div className="font-bold text-stone-900">Standardfrakt</div>
                                                        <div className="text-sm text-stone-500">3-5 arbetsdagar</div>
                                                    </div>
                                                </label>
                                                <span className="font-bold text-green-600">Gratis</span>
                                            </div>

                                            <div className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-all ${shippingMethod === 'express' ? 'border-amber-600 bg-amber-50' : 'border-stone-200 hover:border-amber-200'}`}>
                                                <label htmlFor="shipping-express" className="flex items-center gap-3 w-full cursor-pointer" aria-label="Expressfrakt">
                                                    <input
                                                        id="shipping-express"
                                                        type="radio"
                                                        checked={shippingMethod === 'express'}
                                                        onChange={() => setShippingMethod('express')}
                                                        className="text-amber-600 focus:ring-amber-500"
                                                    />
                                                    <div>
                                                        <div className="font-bold text-stone-900">Expressfrakt</div>
                                                        <div className="text-sm text-stone-500">1-2 arbetsdagar</div>
                                                    </div>
                                                </label>
                                                <span className="font-bold text-stone-900">99:-</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Order Summary */}
                        <div className="h-fit rounded-xl bg-white p-6 border border-stone-200 shadow-sm">
                            <h2 className="mb-6 font-serif text-xl font-bold text-stone-900">Summering</h2>

                            <div className="mb-4 flex justify-between text-stone-600">
                                <span>Delsumma</span>
                                <span>{subtotal}:-</span>
                            </div>
                            <div className="mb-4 flex justify-between text-stone-600">
                                <span>Frakt</span>
                                {shippingCost === 0 ? (
                                    <span className="text-green-600 font-medium">Gratis</span>
                                ) : (
                                    <span className="text-stone-900 font-medium">{shippingCost}:-</span>
                                )}
                            </div>

                            <div className="my-6 border-t border-stone-100 pt-6 flex justify-between text-xl font-bold text-stone-900">
                                <span>Totalt</span>
                                <span>{total}:-</span>
                            </div>

                            {step === 'CART' ? (
                                <button
                                    onClick={handleProceedToShipping}
                                    className="w-full rounded-full bg-amber-600 py-4 font-bold text-white transition-all hover:bg-amber-500 flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:shadow-amber-900/20"
                                >
                                    Gå till kassan
                                    <ArrowRight className="h-5 w-5" />
                                </button>
                            ) : (
                                <button
                                    onClick={handlePayment}
                                    disabled={isCheckingOut || !formData.firstName || !formData.address}
                                    className="w-full rounded-full bg-amber-600 py-4 font-bold text-white transition-all hover:bg-amber-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:shadow-amber-900/20"
                                >
                                    {isCheckingOut ? (
                                        <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/20 border-t-white" />
                                    ) : (
                                        <>
                                            Slutför köp
                                            <CreditCard className="h-5 w-5" />
                                        </>
                                    )}
                                </button>
                            )}

                            {step === 'SHIPPING' && (
                                <button
                                    onClick={() => setStep('CART')}
                                    className="mt-4 w-full text-sm text-stone-500 hover:text-stone-800 transition-colors"
                                >
                                    Tillbaka till varukorgen
                                </button>
                            )}

                            <p className="mt-4 text-center text-xs text-stone-500">
                                Säker betalning med Klarna, Kort eller Swish.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
