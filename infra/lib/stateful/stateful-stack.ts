import * as cdk from "aws-cdk-lib";

import { Construct } from "constructs";
import { StatefulStackProps } from "../types";
import { S3Construct } from "./constructs/s3";

export class StatefulStack extends cdk.Stack {
  private s3Construct: S3Construct;

  constructor(scope: Construct, id: string, props: StatefulStackProps) {
    super(scope, id, props);

    this.createS3Construct(props);
  }

  private createS3Construct(props: StatefulStackProps): void {
    this.s3Construct = new S3Construct(this, `${props.stage}-S3-Construct`, {
      stage: props.stage,
    });
  }
}
