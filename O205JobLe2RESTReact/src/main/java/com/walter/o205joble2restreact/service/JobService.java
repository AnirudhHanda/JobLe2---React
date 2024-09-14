package com.walter.o205joble2restreact.service;

import com.walter.o205joble2restreact.model.JobPost;
import com.walter.o205joble2restreact.repository.JobRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobService {

    @Autowired
    private JobRepo jobRepo;

    public void addJob(JobPost jobPost) {
        jobRepo.save(jobPost);
    }

    public List<JobPost> getAllJobs() {
        return jobRepo.findAll();
    }

    public JobPost getJobPost(int postId) {
        return jobRepo.find(postId);
    }

    public void updataJobPost(JobPost jobPost) {
        jobRepo.update(jobPost);
    }

    public void delete(int postId) {
        jobRepo.deleteById(postId);
    }
}
