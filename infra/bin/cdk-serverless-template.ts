#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { StatelessStack } from "../lib/stateless/stateless-stack";
import { StatefulStack } from "../lib/stateful/stateful-stack";
import DevProps from "../configs/dev";
import StagingProps from "../configs/staging";
import ProdProps from "../configs/prod";

const app = new cdk.App();

const devStatefulStack = new StatefulStack(
  app,
  `${DevProps.Stateful.stage}-StatefulStack-actionssesh`,
  {
    ...DevProps.Stateful,
  },
);

const devStatelessStack = new StatelessStack(
  app,

  `${DevProps.Stateless.stage}-StatelessStack-actionssesh`,
  {
    ...DevProps.Stateless,
  },
);

const stagingStatefulStack = new StatefulStack(
  app,
  `${StagingProps.Stateful.stage}-StatefulStack-actionssesh`,
  {
    ...StagingProps.Stateful,
  },
);

const stagingStatelessStack = new StatelessStack(
  app,

  `${StagingProps.Stateless.stage}-StatelessStack-actionssesh`,
  {
    ...StagingProps.Stateless,
  },
);

const prodStatefulStack = new StatefulStack(
  app,
  `${ProdProps.Stateful.stage}-StatefulStack-actionssesh`,
  {
    ...ProdProps.Stateful,
  },
);

const prodStatelessStack = new StatelessStack(
  app,

  `${ProdProps.Stateless.stage}-StatelessStack-actionssesh`,
  {
    ...ProdProps.Stateless,
  },
);
