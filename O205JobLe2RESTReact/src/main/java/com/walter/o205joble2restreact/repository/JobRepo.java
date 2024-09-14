package com.walter.o205joble2restreact.repository;


import com.walter.o205joble2restreact.model.JobPost;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Repository
public class JobRepo {

    List<JobPost> jobs = new ArrayList<>(Arrays.asList(
            new JobPost(001, "Software Engineer", "Design, develop, and maintain robust and scalable software applications using Java and Spring Boot. Collaborate with cross-functional teams to deliver high-quality products.", 3, Arrays.asList("Java", "Spring Boot")),
            new JobPost(002, "Data Scientist", "Apply advanced statistical and machine learning techniques to analyze large and complex datasets. Develop predictive models and data visualizations to support business decision-making.", 2, Arrays.asList("Python", "Machine Learning")),
            new JobPost(003, "Web Developer", "Create engaging and user-friendly websites using modern front-end technologies like JavaScript and React. Ensure cross-browser compatibility and optimize performance.", 1, Arrays.asList("JavaScript", "React")),
            new JobPost(004, "DevOps Engineer", "Build and maintain CI/CD pipelines to automate software deployment and infrastructure provisioning. Monitor and troubleshoot system issues to ensure high availability.", 4, Arrays.asList("Jenkins", "Docker", "Kubernetes")),
            new JobPost(005, "Product Manager", "Define product vision and strategy. Collaborate with engineering, design, and marketing teams to bring new products to market. Conduct market research and gather user feedback.", 5, Arrays.asList("Product Management", "Agile"))
    ));

    public void save(JobPost jobPost) {
        jobs.add(jobPost);
    }

    public List<JobPost> findAll() {
        return jobs;
    }

    public JobPost find(int postId) {
        for(JobPost job : jobs) {
            if(job.getPostId() == postId) {
                return job;
            }
        }

        return null;
    }

    public void update(JobPost jobPost) {
        for(int i=0; i<jobs.size(); i++) {
            if(jobs.get(i).getPostId() == jobPost.getPostId()) {
                jobs.set(i, jobPost);
            }
        }
    }

    public void deleteById(int postId) {
        for (int i = 0; i<jobs.size(); i++) {
            if(jobs.get(i).getPostId() == postId) {
                jobs.remove(i);
                System.out.println("deleted");
            }
        }
    }
}
