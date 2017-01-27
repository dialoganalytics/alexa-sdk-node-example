# Amazon Alexa Skill in Node.js

An example [Amazon Alexa](https://developer.amazon.com/alexa) node.js skill integrated with [Dialog Analytics](https://dialoganalytics.com) running on [AWS Lambda](https://aws.amazon.com/fr/lambda/). Built with Amazon's [alexa-sdk](https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs).

## Getting started

Clone this repository and run `npm install`

Create an account on https://app.dialoganalytics.com, grab your Dialog API token and bot ID.

If you have any trouble while following the next steps, you may want to refer to this more explicit [example](https://github.com/alexa/skill-sample-nodejs-trivia).

## Creating an Amazon Lambda function

Before creating the Alexa Skill, let's create a Lambda function that will be invoked by asking `Alexa, ask hello world ...`.

1. Go to [aws.amazon.com](https://aws.amazon.com/) and login
2. Create a lambda function. Leave all defaults, except the following configurations.
3. In the __select blueprint__ section:
  - Select `Node.js 4.3`
  - Select `Blank Function`
4. In the __configure triggers__ section:
  - Select `Alexa Skills Kit`
5. In the __configure function__ section:
  - Name your function
  - Select `Upload a .ZIP file` as the __code entry type__, __ZIP THE FILES OF THIS DIRECTORY, NOT THE DIRECTORY ITSELF__ and upload it.
  - Drop down the __Role__ menu and select `Create a new custom role`, click __Allow__ to create the `lambda_basic_execution` role.
  - Set __environement variables__ with your Dialog API token and bot Id. Use `DIALOG_API_TOKEN` and `DIALOG_BOT_ID` as variable names.
6. Click __Next__ and then __Create function__.
7. Copy the __ARN__ from the top right to be used later in the Alexa Skill Setup.

More information on [AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/getting-started.html).

## Creating an Alexa skill

Go to the [Amazon Developer Console](https://developer.amazon.com/edw/home.html) and create a new Alexa Skill. Then follow the setup wizard and leave the defaults, except for the following configurations:

### Configuration Model

#### Intent Schema

```json
{
  "intents": [
    {
      "intent": "HelloWorldIntent"
    },
    {
      "intent": "AMAZON.HelpIntent"
    }
  ]
}
```

### Sample Utterances

```
HelloWorldIntent say hello
HelloWorldIntent say hello world
HelloWorldIntent hello
HelloWorldIntent say hi
HelloWorldIntent say hi world
HelloWorldIntent hi
HelloWorldIntent how are you
```

### Global Fields

In the __Endpoint__ section, select __AWS Lambda ARN (Amazon Resource Name)__, enable a geographical region and past the lambda function ARN you've created earlier.

Good job, your done!

# Usage

You can test your new skill in two ways. In all cases the conversation will be tracked by Dialog as soon as the skill is triggered.

### Service Simulator

In the Amazon Developer Console __Test__ section you can input an utterrance and preview both the __request__ and __response__ of the lambda function. For example you could try: `Say hello`

### Your Skills

Go to your [Alexa App](http://alexa.amazon.com/) in the __Skills__ section, and click on the __Your skills__ button. You'll see the new skill listed, which means you can ask your Amzon Echo something like: `Alexa, ask {name of your skill} to say hello`.

## Go further

Read more on how to make the most out of the possibilities offered by Dialog here: https://dialoganalytics.com
