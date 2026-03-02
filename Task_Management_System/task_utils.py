# task_manager/task_utils.py

from .validation import validate_task_title, validate_task_description, validate_due_date

tasks = []

def add_task(title, description, due_date):
    if not (validate_task_title(title) and
            validate_task_description(description) and
            validate_due_date(due_date)):
        return
    task_id = len(tasks) + 1
    task = {
        "id": task_id,
        "title": title.strip(),
        "description": description.strip(),
        "due_date": due_date,
        "completed": False
    }
    tasks.append(task)
    print("Task added successfully!")

def mark_task_as_complete(task_id):
    for task in tasks:
        if task["id"] == task_id:
            task["completed"] = True
            print("Task marked as complete!")
            return
    print("Error: Task not found.")

def view_pending_tasks():
    pending = [t for t in tasks if not t["completed"]]
    if not pending:
        print("No pending tasks.")
        return
    for t in pending:
        print(f"ID: {t['id']} | Title: {t['title']} | Due: {t['due_date']}")

def calculate_progress():
    if not tasks:
        return 0
    completed = sum(t["completed"] for t in tasks)
    progress = (completed / len(tasks)) * 100
    return round(progress, 2)