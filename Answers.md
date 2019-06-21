1. In Jest, what are the differences between `describe()` and `it()` globals, and what are good uses for them?

describe breaks your test suite into components. Depending on your test strategy, you might have a describe for each function in your class, each module of your plugin, or each user-facing piece of functionality.

You can also nest describes to further subdivide the suite.

it is where you perform individual tests. You should be able to describe each test like a little sentence, such as "it calculates the area when the radius is set". You shouldn't be able to subdivide tests further-- if you feel like you need to, use describe instead.

1. What is the point of `Test Driven Development`? What do you think about this approach?

TDD means you write the tests first and then go and write the code. If the tests fail, go and refactor the code until the tests pass. It needs a lot of discipline and also have to know the flow of the design.

1. Mention three types of automated tests.

. Unit Testing
. Regression Testing
. Integration Testing
