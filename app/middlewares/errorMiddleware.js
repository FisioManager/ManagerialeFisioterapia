async function errorMiddleware(err, req, res, next) {
    // Log the error
    console.error(err);

    // Set the status code and send an error response
    res.status(501).json({ error: 'Internal Server Error' });
}

export default errorMiddleware
