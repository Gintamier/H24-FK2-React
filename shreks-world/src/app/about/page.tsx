import Link from "next/link";

export default function About() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">
        About Shrek's World
      </h1>
      <section className="space-y-6">
        <p className="text-lg text-gray-700">
          Welcome to Shrek's World! This is a magical place inspired by the
          beloved movie series. Here, you can explore the swamp, visit Duloc,
          meet quirky characters like Shrek, Donkey, and Fiona, and immerse
          yourself in the world of Shrek.
        </p>
        <p className="text-lg text-gray-700">
          Shrek's World offers detailed information about some of the most
          iconic locations in the Shrek universe. Our site features pages about
          the famous places like Shrek’s Swamp and Duloc, which is ruled by the
          infamous Lord Farquaad.
        </p>
      </section>
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-green-800">
          Locations Featured in the Site
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Shrek's Swamp</strong>: A peaceful, murky place where Shrek
            lives. This swamp is the perfect hideaway for a grumpy ogre like
            Shrek.
          </li>
          <li>
            <strong>Duloc</strong>: The land of Lord Farquaad, known for its
            pristine cleanliness and rigid order. It’s the opposite of Shrek’s
            swamp, making it an interesting contrast in the world of Shrek.
          </li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-green-800">
          Meet the Characters
        </h2>
        <p className="text-lg text-gray-700">
          Shrek's World wouldn’t be complete without its colorful and iconic
          characters. Along with Shrek himself, you'll encounter:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Shrek</strong>: The grumpy yet lovable ogre.
          </li>
          <li>
            <strong>Donkey</strong>: Shrek's best friend, always cheerful and
            talkative.
          </li>
          <li>
            <strong>Fiona</strong>: Shrek's princess, a strong-willed character
            with a big heart.
          </li>
        </ul>
      </section>
      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-green-800">
          About the Site
        </h2>
        <p className="text-lg text-gray-700">
          This website is a tribute to the Shrek universe, providing detailed
          information on some of the most iconic characters and locations. It is
          designed to be an easy-to-navigate, informative hub for fans of the
          franchise to explore, learn, and enjoy.
        </p>
      </section>
      <div className="mt-8 text-center">
        <Link
          href="/locations"
          className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
        >
          Explore the Locations
        </Link>
      </div>
    </div>
  );
}
