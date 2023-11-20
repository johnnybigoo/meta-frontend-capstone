import customer1Image from './assets/DianaNyad.png';
import customer2Image from './assets/AlfonsoRibeiro.png';
import customer3Image from './assets/TyraBanks.png';
import customer4Image from './assets/HaSeok-jin.png';
import './Testimonials.css';
import TestimonialCard from './TestimonialCard';

const customers = [
  {
    fullName: 'Diana Nyad',
    image: customer1Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    fullName: 'Alfonso Ribeiro',
    image: customer2Image,
    rating: [1, 1, 1, 1, 1],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    fullName: 'Tyra Banks',
    image: customer3Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    fullName: 'Ha Seok-jin',
    image: customer4Image,
    rating: [1, 1, 1, 1],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>What people say about us!</h2>
        {customers.map((customer, index) =>
          <TestimonialCard key={index} customer={customer} />
        )}
      </div>
    </section>
  );
};

export default Testimonials;
