package com.walter.o205joble2restreact.controller;

import com.walter.o205joble2restreact.model.JobPost;
import com.walter.o205joble2restreact.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class JobController {

    @Autowired
    private JobService jobService;

    @GetMapping("jobPosts")
    public List<JobPost> getJobPosts() {
        return jobService.getAllJobs();
    }

    @GetMapping("jobPost/{postId}")
    public JobPost getJobPost(@PathVariable int postId) {
        return jobService.getJobPost(postId);
    }

    @PostMapping("jobPost")
    public int createJobPost(@RequestBody JobPost jobPost) {
        jobService.addJob(jobPost);
        return jobPost.getPostId();
    }

    @PutMapping("jobPost")
    public int updateJobPost(@RequestBody JobPost jobPost) {
        jobService.updataJobPost(jobPost);
        return jobPost.getPostId();
    }

    @DeleteMapping("jobPost/{postId}")
    public int deleteJobPost(@PathVariable int postId) {
        jobService.delete(postId);
        return postId;
    }
}
