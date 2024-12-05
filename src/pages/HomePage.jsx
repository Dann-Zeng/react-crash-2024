import Hero from '../components/Hero';
import HomeCarts from '../components/HomeCards';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCarts />
      <JobListings />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
