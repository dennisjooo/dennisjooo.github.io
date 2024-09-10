import React from 'react';
import { BentoGrid, BentoCard } from './BentoComponents';
import { certifications, Certification } from '../data/certificationContent';

const CertificationCard = ({ cert }: { cert: Certification }) => (
  <BentoCard
    key={cert.id}
    name={cert.title}
    className="col-span-3 md:col-span-2 lg:col-span-1"
    description={cert.description}
    href={cert.link}
    cta="View Certificate"
    date={`${cert.issuer} | ${cert.date}`}
  />
);

export default function CertificationsList() {
    return (
        <BentoGrid>
            {certifications.map((cert) => (
                <CertificationCard key={cert.id} cert={cert} />
            ))}
        </BentoGrid>
    );
}