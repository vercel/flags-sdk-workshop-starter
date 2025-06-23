// This API endpoint is used to demonstrate how NOT to build experiments.
//
// This endpoint is queried by the client after the javascript loads, so it
// leads to layout shift / jank / flickering.
export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return Response.json({
    summerSale: true,
    freeDelivery: false,
  });
}
