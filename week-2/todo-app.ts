import readline from "readline";

// Define Todo type
type Todo = {
  id: number;
  text: string;
  completed: boolean; // Added for the markAsDone function
}

// Store todos in memory (array)
let todos: Todo[] = [];
let nextID = 1; // New code (ID's starting from 1 instead of 13 numbers)

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Add a new todo
const addTodo = (): void => {
  rl.question("Enter task: ", (text: string) => {
    if (text.trim() === "") {
      console.log("Task cannot be empty!\n");
    } else {
      const newTodo: Todo = {
        id: nextID++, // New code (ID's starting from 1 instead of 13 numbers)
        text: text.trim(),
        completed: false, // New code
      };

      todos.push(newTodo);
      console.log("✓ Task added successfully!\n");
    }
    showMenu();
  });
};

// List all todos
const listTodos = (): void => {
  console.clear();
  console.log("\n=== Todo List App ===");
  console.log("Commands: add, list, remove, mark-as-done exit\n")

  if (todos.length === 0) {
    console.log("No todos yet!\n");
  } else {
    console.log("Your Todos:");
    todos.forEach((todo: Todo) => {
      console.log(`${todo.id}. ${todo.text}`);
    });
    console.log("");
  }

  process.stdout.write("> ");
  rl.question("", (command: string) => {
    handleCommand(command);
  });
};

// Remove a todo
const removeTodo = (): void => {
  rl.question("Enter task ID to remove: ", (input: string) => {
    const id: number = parseInt(input);

    // Use filter to create new array without the todo
    const updatedTodos: Todo[] = todos.filter((todo: Todo) => todo.id !== id);

    if (updatedTodos.length === todos.length) {
      console.log("Task not found!\n");
    } else {
      todos = updatedTodos;
      console.log("Task removed successfully!\n");
    }

    showMenu();
  });
};

const pause = (callback: () => void): void => {
  rl.question("Press Enter to return to menu...", () => {
    callback();
  });
}; // For the console log messages to show up after marking as done

// Mark todo as done
const markAsDone = (): void => {
  rl.question("Enter task ID to mark as done: ", (input: string) => {
    const id: number = parseInt(input);

    // Find the specific todo by ID
    const todo = todos.find((t) => t.id === id);

    if (todo) {
      todo.completed = true;
      console.log(`✓ Task "${todo.text}" marked as done!\n`);
    } else {
      console.log("Task ID not found!\n");
    }

    pause(showMenu); 
  });
}

// Handle command logic
const handleCommand = (command: string): void => {
  switch (command.trim().toLowerCase()) {
    case "add":
      addTodo();
      break;
    case "list":
      listTodos();
      break;
    case "remove":
      removeTodo();
      break;
    case "mark-as-done":
      markAsDone();
      break;
    case "exit":
      console.log("Goodbye!");
      rl.close();
      break;
    default:
      console.log("Unknown command\n");
      showMenu();
  }
};

// Show menu and handle commands
const showMenu = (): void => {
  console.clear();
  console.log("\n=== Todo List App ===");
  console.log("Commands: add, list, remove, mark-as-done, exit\n");
  process.stdout.write("> ");
  rl.question("", (command: string) => {
    handleCommand(command);
  });
};

// Start the app
console.log("\n=== Todo List App ===");
console.log("Commands: add, list, remove, mark-as-done, exit\n");
showMenu();