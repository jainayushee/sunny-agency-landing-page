import React from "react";

type Testimonial = {
  name: string;
  body: string;
  role: string;
  img: string;
};

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "Emily R.",
      body: `We put our trust in Sunnyside and they delivered, making sure
    our needs were met and deadlines were always hit.`,
      role: "Marketing Director",
      img: "emily",
    },
    {
      name: "Thomas S.",
      body: `Sunnyside’s enthusiasm coupled with their keen interest in our
    brand’s success made it a satisfying and enjoyable experience.`,
      role: "Chief Operating Officer",
      img: "thomas",
    },
    {
      name: "Jennie F.",
      body: `Incredible end result! Our sales increased over 400% when we
    worked with Sunnyside. Highly recommended!`,
      role: "Business Owner",
      img: "jennie",
    },
  ];

  return (
    <div className="pb-20">
      <div className="text-center pt-20 pb-16">
        <h2 className="text-2xl text-[#818498] uppercase ">Client Testimonials</h2>
      </div>

      <div className="flex lg:flex-row px-10 flex-col">
        {testimonials.map((testy: Testimonial) => (
          <div className="flex flex-col items-center justify-center pb-10">
            <img
              src={`img/image-${testy.img}.jpg`}
              className="rounded-full image-fix"
              id="testimonial-image"
            />

            <p
              style={{
                color: "#5a636c",
                fontSize: "0.9rem",
                fontWeight: "400",
                fontFamily: '"Barlow", sans-serif',
              }}
              id="testimonial-body"
              className="text-center px-16 pb-6"
            >
              {testy.body}
            </p>

            <div id="testimonial-footer">
              <p className="text-center">{testy.name}</p>
              <p className="text-center text-[#a7abae]"> {testy.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
