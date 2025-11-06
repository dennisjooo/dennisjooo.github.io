import React from 'react';
import { BentoGrid, BentoCard } from '@/components/BentoComponents';
import { certifications, Certification } from '@/data/certificationContent';

const CertificationCard = ({ cert }: { cert: Certification }) => (
  <BentoCard
    key={cert.id}
    name={cert.title}
    className="col-span-1"
    description={cert.description}
    href={cert.link}
    cta="View Certificate"
    date={`${cert.issuer} | ${cert.date}`}
    isCertification={true}
  />
);

export default function CertificationsList() {
  return (
    <BentoGrid className="max-w-7xl mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {certifications.map((cert) => (
        <CertificationCard key={cert.id} cert={cert} />
      ))}
    </BentoGrid>
  );
}