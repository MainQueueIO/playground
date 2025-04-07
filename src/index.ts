/**
 * Function for testing library deployment
 * 
 * @param name - Parameter to add to the message
 */
export const helloMessage = (name?: string | null) => {
    return !!name && name.length > 0 ? `Hello ${name}` : 'Hello from MainQueue Library';
}