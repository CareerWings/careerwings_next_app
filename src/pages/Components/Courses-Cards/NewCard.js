import React from 'react';

const NewCard = () => {
  const courses= [
    {
      id: 1,
      image: 'https://cdn.britannica.com/85/13085-050-C2E88389/Corpus-Christi-College-University-of-Cambridge-England.jpg',
      universityName: 'University 1',
      courseName: 'Master of Science in Cyber-Security',
      courseDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.',
    },
    {
      id: 2,
      image: 'https://cdn.britannica.com/85/13085-050-C2E88389/Corpus-Christi-College-University-of-Cambridge-England.jpg',
      universityName: 'University 2',
      courseName: 'Machine Learning and Big Data',
      courseDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.',
    },
    {
        id: 3,
        image: 'https://cdn.britannica.com/85/13085-050-C2E88389/Corpus-Christi-College-University-of-Cambridge-England.jpg',
        universityName: 'University 3',
        courseName: 'Embedded Systems and Internet of Things',
        courseDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.',
    },
    {
        id: 4,
        image: 'https://cdn.britannica.com/85/13085-050-C2E88389/Corpus-Christi-College-University-of-Cambridge-England.jpg',
        universityName: 'University 4',
        courseName: 'Deep Learning',
        courseDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.',
    },
    {
        id: 5,
        image: 'https://cdn.britannica.com/85/13085-050-C2E88389/Corpus-Christi-College-University-of-Cambridge-England.jpg',
        universityName: 'University 5',
        courseName: 'Natural Language Processing',
        courseDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.',
    },
    {
        id: 5,
        image: 'https://cdn.britannica.com/85/13085-050-C2E88389/Corpus-Christi-College-University-of-Cambridge-England.jpg',
        universityName: 'University 5',
        courseName: 'Digital Image Processing',
        courseDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.',
    },
    {
        id: 6,
        image: 'https://cdn.britannica.com/85/13085-050-C2E88389/Corpus-Christi-College-University-of-Cambridge-England.jpg',
        universityName: 'University 6',
        courseName: 'Ui/UX Designing',
        courseDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.',
    },
  ];

  return (
    <section className="course-section">
    <div className="content-container">
      <h2>Available Courses</h2>

      <div className="card-container">
        {courses.map((course) => (
          <div className="card" key={course.id}>
            <div className="card-image">
              <img src={course.image} alt={course.courseTitle} />
            </div>
            <div className="card-content">
              <h3>{course.universityName}</h3>
              <h4>{course.courseName}</h4>
              <p>{course.courseDescription}</p>
              <button>Enroll Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>

    <style jsx>{`
      .course-section {
        padding: 40px;
      }

      .content-container {
        max-width: 1200px;
        margin: 0 auto;
      }

      h2 {
        font-size: 24px;
        text-align: center;
        margin-bottom: 40px;
      }

      .card-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
      }

      .card {
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        width: 300px;
      }

      .card-image {
        width: 100%;
        height: 200px;
        overflow: hidden;
      }

      .card-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .card-content {
        padding: 20px;
      }

      h3 {
        font-size: 20px;
        margin-bottom: 10px;
      }

      h4 {
        font-size: 18px;
        margin-bottom: 10px;
      }

      p {
        font-size: 14px;
        color: #777;
        margin-bottom: 20px;
      }

      button {
        background-color: royalblue;
        color: #fff;
        border: none;
        border-radius: 4px;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
      }
    `}</style>
  </section>
 );
};

export default NewCard;
