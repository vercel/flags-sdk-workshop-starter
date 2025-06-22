// This API endpoint is used to demonstrate how NOT to build experiments.
//
// This endpoint is queried by the client after the javascript loads, so it
// leads to layout shift / jank / flickering.
export async function GET() {
  return Response.json({
    summerSale: Math.random() > 0.5,
    freeDelivery: Math.random() > 0.5,
  });
}
