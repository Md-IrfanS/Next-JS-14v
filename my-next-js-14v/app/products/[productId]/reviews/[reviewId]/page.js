import { notFound } from "next/navigation";

const ReviewDetailsPage = ({ params }) => {
  const { productId, reviewId } = params;
  
  if (!false) {
    notFound();
  }

  return (
    <div>
      <h1>product - {productId}</h1>
      <h1>ReviewDetailsPage - review -{reviewId}</h1>
    </div>
  );
};

export default ReviewDetailsPage;
