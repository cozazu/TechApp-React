export default function Contact() {
    return (
        <div className="container mx-auto">
            <h2 className="text-center mb-5">CONTACT US</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex justify-center">
                    <img src="/servicioalcliente.png" alt="servicioalcliente" className="max-w-full" />
                </div>
                <div>
                    <div className="contact-info">
                        <h3>Contact information</h3>
                        <p>You can contact us in the following ways:</p>
                        <ul>
                            <li>Telephone: 01-800-0982345</li>
                            <li>Email: cozazustore@gmail.com</li>
                            <li>Dirección: Cra 48d # 188 - 01</li>
                        </ul>
                    </div>
                    <div className="contact-form">
                        <h3>Contact Form</h3>
                        <form className="flex flex-col justify-start h-full">
                            <div className="mb-3">
                                <label htmlFor="nombre" className="block mb-1">Name:</label>
                                <input type="text" className="w-full border-2 border-slate-950 rounded-md" id="nombre" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="correo" className="block mb-1">Email:</label>
                                <input type="email" className="w-full border-2 border-slate-950 rounded-md" id="correo" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="mensaje" className="block mb-1">Message:</label>
                                <textarea className="w-full border-2 border-slate-950 rounded-md" id="mensaje"></textarea>
                            </div>
                            <button type="submit" className="justify-self-end w-full bg-slate-950 text-white py-2 px-4 rounded-md hover:bg-amber-500 focus:outline-none focus:ring focus:ring-orange-200 focus:ring-offset-2 focus:ring-offset-orange-100">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
