const counters = [
  {
    id: 1,
    iconClass: "icon-box",
    value: "2800",
    label: "Courses Delivered",
    animationClass: "fadeInLeft",
  },
  {
    id: 2,
    iconClass: "icon-location",
    value: "200",
    label: "Clients",
    animationClass: "fadeInRight",
  },
  {
    id: 3,
    iconClass: "icon-customer-loyalty",
    value: "10",
    label: "Years Of Experience",
    animationClass: "fadeInLeft",
  },
];

export function CounterOne() {
  return (
    <section className="counter-one">
      <div className="container">
        <div className="row">
          {counters.map((counter) => (
            <div
              key={counter.id}
              className={`col-xl-4 col-lg-4 wow ${counter.animationClass}`}
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="counter-one__single">
                <div className="counter-one__single-inner">
                  <div className="icon">
                    <span className={counter.iconClass} />
                  </div>
                  <div className="content-box">
                    <div className="count-text-box count-box">
                      <h3>{counter.value}</h3>
                      <span className="plus">+</span>
                    </div>
                    <div className="text-box">
                      <p>{counter.label}</p>
                    </div>
                  </div>
                </div>
                <div className="shape1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
