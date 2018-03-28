import Todo from './model';


//Create to-do
export const createTodo = async (req, res) => {
  const { title, description, todoDate } = req.body;

  //validate title if not null, type string and the length
  if (!title) {
    return res.status(400).json({ error: true, message: 'Title must be provided!' });
  } else if (typeof title !== 'string') {
    return res.status(400).json({ error: true, message: 'Title must be a string!' });
  } else if (title.length > 20) {
    return res.status(400).json({ error: true, message: 'Title must have maximum 15 characters long!!' });
  }

  //validate description if not null, type string and the length
  if (!description) {
    return res.status(400).json({ error: true, message: 'Description must be provided!' });
  } else if (typeof description !== 'string') {
    return res.status(400).json({ error: true, message: 'Description must be a string!' });
  } else if (description.length > 200) {
    return res.status(400).json({ error: true, message: 'Description must have maximum 200 characters long!!' });
  }

  const oldTodo = await Todo.findOne({ title }).lean();
  if (oldTodo) {
    return res.status(400).json({ error: true, message: 'Title must be unique!' });
  }
  const newTodo = new Todo({ title, description, todoDate });

  try {
    return res.status(201).json({ todo: await newTodo.save() })
  } catch (error) {
    return res.status(error.status).json({ error: true, message: "Error with to-do create" })
  }
}

//Get all to-do list
export const getTodos = async (req, res) => {
  try {
    return res.status(200).json({ todos: await Todo.find({}).lean() });
  } catch (error) {
    return res.status(error.status).json({ error: true, message: "Error getting whole to-do list" })
  }
}

//Get all just one to-do list by id
export const getTodo = async (req, res) => {
  const { idTodo } = req.params;

  try {

    return res.status(200).json({ todo: await Todo.findById(idTodo).lean() });
  } catch (error) {
    return res.status(error.status).json({ error: true, message: "Error getting to-do list" })
  }
}

//Remove an object by ID
export const removeTodo = async (req, res) => {
  const { idTodo } = req.params;

  try {
    return res.status(200).json({ todos: await Todo.findByIdAndRemove(idTodo) });
  } catch (error) {
    return res.status(error.status).json({ error: true, message: "Error removing to-do list" })
  }
}