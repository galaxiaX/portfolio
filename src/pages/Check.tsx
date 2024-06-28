const CheckPage = () => {
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicId = import.meta.env.VITE_PUBLIC_ID;

  return (
    <div>
      <h1>Check Page</h1>
      <p>serviceId : {serviceId}</p>
      <p>templateId : {templateId}</p>
      <p>publicId : {publicId}</p>
    </div>
  );
};

export default CheckPage;
