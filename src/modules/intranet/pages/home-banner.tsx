export const HomeBanner = () => {
  return (
    <section className="bg-primary-900">
      <section
        id="user-section"
        className="container text-white sm:h-80 min-h-80 flex items-center justify-start"
      >
        <div>
          <h1 className="text-3xl font-bold">
            Bienvenidos, Jhonatan Cervantes C.
          </h1>
          <h3 className="text-gray-400">
            Escuela de Posgrado - Universidad Nacional de la Amazonía Peruana
          </h3>
        </div>
      </section>
      <section
        id="card-section"
        className="bg-primary-50"
      >
        <main className="container"></main>
      </section>
    </section>
  )
}
