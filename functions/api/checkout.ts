export interface Env {}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const body = await context.request.json() as { items?: any[]; total?: number; customerInfo?: any };

    // Simulate processing
    const orderId = 'SH-' + Math.floor(100000 + Math.random() * 900000);

    return new Response(
      JSON.stringify({
        success: true,
        orderId,
        message: 'Order processed successfully via Cloudflare Pages Function',
        timestamp: new Date().toISOString(),
        details: body
      }),
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({ success: false, error: error.message || 'Invalid request' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
