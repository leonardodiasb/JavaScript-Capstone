import { commentCount } from "../api_comment";

describe('commentCount Function', () => {

  test('Count the amount of comments', () => {
    // Assign
    let count = 0;
    const commentArray = [
      {
        "item_id": "item1",
        "username": "Jane",
        "comment": "Hello"
      }, 
      {
        "item_id": "item2",
        "username": "Jake",
        "comment": "Hi"
      }, 
      {
        "item_id": "item3",
        "username": "Jame",
        "comment": "Hola"
      }
    ];

    // Act
    count = commentCount(commentArray);

    // Assert
    expect(count).toBe(3);
  });
});