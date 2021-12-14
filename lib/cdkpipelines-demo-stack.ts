import * as apigw from '@aws-cdk/aws-apigateway';
import * as lambda from '@aws-cdk/aws-lambda';
import { CfnOutput, Construct, Stack, StackProps } from '@aws-cdk/core';
import * as path from 'path';

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

    const handler5 = new lambda.Function(this, 'Lambda5', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'handler5.handler',
      code: lambda.Code.fromAsset(path.resolve(__dirname, 'lambda5')),
    });

    const handler6 = new lambda.Function(this, 'Lambda6', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'handler6.handler',
      code: lambda.Code.fromAsset(path.resolve(__dirname, 'lambda6')),
    });

    const handler7 = new lambda.Function(this, 'Lambda7', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'handler7.handler',
      code: lambda.Code.fromAsset(path.resolve(__dirname, 'lambda7')),
    });

    const handler8 = new lambda.Function(this, 'Lambda8', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'handler8.handler',
      code: lambda.Code.fromAsset(path.resolve(__dirname, 'lambda8')),
    });

    const handler9 = new lambda.Function(this, 'Lambda9', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'handler9.handler',
      code: lambda.Code.fromAsset(path.resolve(__dirname, 'lambda9')),
    });

    const handler10 = new lambda.Function(this, 'Lambda10', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'handler10.handler',
      code: lambda.Code.fromAsset(path.resolve(__dirname, 'lambda10')),
    });

    const handler11 = new lambda.Function(this, 'Lambda11', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'handler11.handler',
      code: lambda.Code.fromAsset(path.resolve(__dirname, 'lambda11')),
    });

    const handler12 = new lambda.Function(this, 'Lambda12', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'handler12.handler',
      code: lambda.Code.fromAsset(path.resolve(__dirname, 'lambda12')),
    });

    const handler13 = new lambda.Function(this, 'Lambda13', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'handler13.handler',
      code: lambda.Code.fromAsset(path.resolve(__dirname, 'lambda13')),
    });

    const handler14 = new lambda.Function(this, 'Lambda14', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'handler14.handler',
      code: lambda.Code.fromAsset(path.resolve(__dirname, 'lambda14')),
    });

    const handler15 = new lambda.Function(this, 'Lambda15', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'handler15.handler',
      code: lambda.Code.fromAsset(path.resolve(__dirname, 'lambda15')),
    });

    const handler16 = new lambda.Function(this, 'Lambda16', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'handler16.handler',
      code: lambda.Code.fromAsset(path.resolve(__dirname, 'lambda16')),
    });

    const handler17 = new lambda.Function(this, 'Lambda17', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'handler17.handler',
      code: lambda.Code.fromAsset(path.resolve(__dirname, 'lambda17')),
    });
    const handler18 = new lambda.Function(this, 'Lambda18', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'handler18.handler',
      code: lambda.Code.fromAsset(path.resolve(__dirname, 'lambda18')),
    });
    const handler19 = new lambda.Function(this, 'Lambda19', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'handler19.handler',
      code: lambda.Code.fromAsset(path.resolve(__dirname, 'lambda19')),
    });
    const handler20 = new lambda.Function(this, 'Lambda20', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'handler20.handler',
      code: lambda.Code.fromAsset(path.resolve(__dirname, 'lambda20')),
    });
    const handler21 = new lambda.Function(this, 'Lambda21', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'handler21.handler',
      code: lambda.Code.fromAsset(path.resolve(__dirname, 'lambda21')),
    });
    const handler22 = new lambda.Function(this, 'Lambda22', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'handler22.handler',
      code: lambda.Code.fromAsset(path.resolve(__dirname, 'lambda22')),
    });
    const handler23 = new lambda.Function(this, 'Lambda23', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'handler23.handler',
      code: lambda.Code.fromAsset(path.resolve(__dirname, 'lambda23')),
    });
    const handler24 = new lambda.Function(this, 'Lambda24', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'handler24.handler',
      code: lambda.Code.fromAsset(path.resolve(__dirname, 'lambda24')),
    });
    const handler25 = new lambda.Function(this, 'Lambda25', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'handler25.handler',
      code: lambda.Code.fromAsset(path.resolve(__dirname, 'lambda25')),
    });
    const handler26 = new lambda.Function(this, 'Lambda26', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'handler26.handler',
      code: lambda.Code.fromAsset(path.resolve(__dirname, 'lambda26')),
    });
    const handler27 = new lambda.Function(this, 'Lambda27', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'handler27.handler',
      code: lambda.Code.fromAsset(path.resolve(__dirname, 'lambda27')),
    });
    const handler28 = new lambda.Function(this, 'Lambda28', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'handler28.handler',
      code: lambda.Code.fromAsset(path.resolve(__dirname, 'lambda28')),
    });
    const handler29 = new lambda.Function(this, 'Lambda29', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'handler29.handler',
      code: lambda.Code.fromAsset(path.resolve(__dirname, 'lambda29')),
    });
    const handler30 = new lambda.Function(this, 'Lambda30', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'handler30.handler',
      code: lambda.Code.fromAsset(path.resolve(__dirname, 'lambda30')),
    });
    const handler31 = new lambda.Function(this, 'Lambda31', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'handler31.handler',
      code: lambda.Code.fromAsset(path.resolve(__dirname, 'lambda31')),
    });
    const handler32 = new lambda.Function(this, 'Lambda32', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'handler32.handler',
      code: lambda.Code.fromAsset(path.resolve(__dirname, 'lambda32')),
    });
    const handler33 = new lambda.Function(this, 'Lambda33', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'handler33.handler',
      code: lambda.Code.fromAsset(path.resolve(__dirname, 'lambda33')),
    });
    const handler34 = new lambda.Function(this, 'Lambda34', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'handler34.handler',
      code: lambda.Code.fromAsset(path.resolve(__dirname, 'lambda34')),
    });
    const handler35 = new lambda.Function(this, 'Lambda35', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'handler35.handler',
      code: lambda.Code.fromAsset(path.resolve(__dirname, 'lambda35')),
    });
    const handler36 = new lambda.Function(this, 'Lambda36', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'handler36.handler',
      code: lambda.Code.fromAsset(path.resolve(__dirname, 'lambda36')),
    });
//    const handler37 = new lambda.Function(this, 'Lambda37', {
//      runtime: lambda.Runtime.NODEJS_12_X,
//      handler: 'handler37.handler',
//      code: lambda.Code.fromAsset(path.resolve(__dirname, 'lambda37')),
//    });

  }
}
