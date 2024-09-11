export default function Contact() {
  return (
    <section className="contact py-20" id="contact">
      <h2 className="text-3xl font-bold text-center">Contact <span className="text-green-600">Us</span></h2>
      <form action="#" className="max-w-md mx-auto mt-8">
        <div className="input-box flex flex-col space-y-4">
          <input type="text" placeholder="Full Name" className="p-2 border border-gray-300 rounded"/>
          <input type="email" placeholder="Email" className="p-2 border border-gray-300 rounded"/>
          <input type="number" placeholder="Phone Number" className="p-2 border border-gray-300 rounded"/>
          <input type="text" placeholder="Subject" className="p-2 border border-gray-300 rounded"/>
        </div>
        <textarea name="" id="" cols="30" rows="10" placeholder="Your Message" className="p-2 border border-gray-300 rounded mt-4 w-full"></textarea>
        <input type="submit" value="Send Message" className="btn bg-green-600 text-white py-2 px-4 rounded mt-4"/>
      </form>
    </section>
  );
}
