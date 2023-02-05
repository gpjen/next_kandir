import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Layout from "@/components/Layout";

export default function Faq() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const content = [
    {
      question:
        "Bagaimana saya bisa mendapatkan informasi seputar Nusaina?",
      answer:
        "Anda bisa mendapatkan informasi tentang perusahaan dengan mengakses profil NUSAINA GROUP pada link www.nusainagroup.com",
    },
    {
      question: "Berapa lama Nusaina BERDIRI?",
      answer: "Sejak tahun 1999",
    },
    {
      question: "Dimanakah alamat kantor direksi Nusaina?",
      answer: "Desa kobimukti, kec.kobi, kab.maluku tengah",
    },
  ];

  return (
    <>
      <Layout>
        <div className="container mb-24">
          <h1 className="container mb-10 text-center text-lg mt-16 font-bold leading-8 text-gray-800 dark:text-white sm:text-3xl sm:leading-9">
            Pertanyaan yang sering ditanyakan
          </h1>
          <Fragment>
            {content.map((faq, i) => {
              return (
                <div key={i+1}>
                  <Accordion open={open === i+1}>
                    <AccordionHeader onClick={() => handleOpen(i+1)} className="text-md" >
                      {faq.question}
                    </AccordionHeader>
                    <AccordionBody>
                      {faq.answer}
                    </AccordionBody>
                  </Accordion>
                </div>
              );
            })}
          </Fragment>
        </div>
      </Layout>
    </>
  );
}
