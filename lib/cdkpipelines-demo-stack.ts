import * as apigw from '@aws-cdk/aws-apigateway';
import * as lambda from '@aws-cdk/aws-lambda';
import { CfnOutput, Construct, Stack, StackProps } from '@aws-cdk/core';
import * as path from 'path';
import * as sqs from '@aws-cdk/aws-sqs';

/**
 * A stack for our simple Lambda-powered web service
 */
export class CdkpipelinesDemoStack extends Stack {
  /**
   * The URL of the API Gateway endpoint, for use in the integ tests
   */
  public readonly urlOutput: CfnOutput;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The Lambda function that contains the functionality
    const handler = new lambda.Function(this, 'Lambda', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'handler.handler',
      code: lambda.Code.fromAsset(path.resolve(__dirname, 'lambda')),
    });

    // An API Gateway to make the Lambda web-accessible
    const gw = new apigw.LambdaRestApi(this, 'Gateway', {
      description: 'Endpoint for a simple Lambda-powered web service',
      handler,
    });

    this.urlOutput = new CfnOutput(this, 'Url', {
      value: gw.url,
    });

    // The Lambda function that contains the functionality
    const handler2 = new lambda.Function(this, 'Lambda2', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'handler2.handler',
      code: lambda.Code.fromAsset(path.resolve(__dirname, 'lambda2')),
    });

    // An API Gateway to make the Lambda web-accessible
    const gw2 = new apigw.LambdaRestApi(this, 'Gateway2', {
      description: 'Endpoint for a simple Lambda-powered web service',
      handler,
    });

    // The Lambda function that contains the functionality
    const handler3 = new lambda.Function(this, 'Lambda3', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'handler3.handler',
      code: lambda.Code.fromAsset(path.resolve(__dirname, 'lambda3')),
    });

    // An API Gateway to make the Lambda web-accessible
    const gw3 = new apigw.LambdaRestApi(this, 'Gateway3', {
      description: 'Endpoint for a simple Lambda-powered web service',
      handler,
    });

    const handler4 = new lambda.Function(this, 'Lambda4', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'handler4.handler',
      code: lambda.Code.fromAsset(path.resolve(__dirname, 'lambda4')),
    });

  }
}
