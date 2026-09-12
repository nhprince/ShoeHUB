export interface Env {}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const body = await context.request.json() as { email?: string };
    if (!body.email || !body.email.includes('@')) {
      return new Response(
        JSON.stringify({ success: false, message: 'Valid email required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Subscribed to ShoeHub VIP newsletter successfully'
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
      JSON.stringify({ success: false, error: 'Failed to subscribe' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
