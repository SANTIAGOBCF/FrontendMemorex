export const endPoint = ({
    courseId,
    userId,
    pubId,
    commentId,
    email,
    groupId,
    courseCode,
    submission_id,
    nota,
    publication_id,
}) => {
    return {
        calificateSubmission:`/submission/calificate/${userId}/${publication_id}/${nota}`,
        createCourse: '/course',
        createGroup: `/group/create/${courseId}/default`,
        createSubmission:'/submission',
        createUser: '/user',
        delegateUser: `/course/${courseId}/delegate/${userId}`,
        editCourse: `/course/edit/${courseId}`,
        editUser: `user/${email}`,
    }
}