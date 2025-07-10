import * as cdk from "aws-cdk-lib";

import { Construct } from "constructs";
import { LambdaConstruct } from "./constructs/lambda";
import { ApiGatewayConstruct } from "./constructs/apigateway";
import { StatelessStackProps } from "../types";

export class StatelessStack extends cdk.Stack {
  private apiGatewayConstruct: ApiGatewayConstruct;
  private lambdaConstruct: LambdaConstruct;

  constructor(scope: Construct, id: string, props: StatelessStackProps) {
    super(scope, id, props);

    this.createLambdaConstruct(props);
    this.createApiGatewayConstruct(props);
  }

  private createApiGatewayConstruct(props: StatelessStackProps): void {
    this.apiGatewayConstruct = new ApiGatewayConstruct(
      this,
      `${props.stage}-ApiGateway-Construct`,
      {
        stage: props.stage,
        sampleIntegration: this.lambdaConstruct.sampleIntegration,
      },
    );
  }

  private createLambdaConstruct(props: StatelessStackProps): void {
    this.lambdaConstruct = new LambdaConstruct(
      this,
      `${props.stage}-Lambda-Construct`,
      {
        stage: props.stage,
      },
    );
  }
}
