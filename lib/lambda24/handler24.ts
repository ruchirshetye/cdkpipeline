import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';

export async function handler(event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {
  return {
    body: 'Hello from a Lambda Function werwerwer342rw',
    statusCode: 200,
  };
}
