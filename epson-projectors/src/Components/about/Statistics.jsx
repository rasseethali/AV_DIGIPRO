const Statistics = () => {
  const stats = [
    { number: "500+", title: "Happy Clients" },
    { number: "1000+", title: "Products Delivered" },
    { number: "150+", title: "Business Projects" },
    { number: "24/7", title: "Customer Support" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="text-center rounded-3xl border border-gray-200 p-10 hover:shadow-xl transition"
            >
              <h2 className="text-5xl font-bold text-red-600">
                {item.number}
              </h2>

              <p className="mt-4 text-gray-600">
                {item.title}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Statistics;