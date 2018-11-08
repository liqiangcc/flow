package com.venus.dbg.flowcollector;

import com.venus.dbg.flowcollector.Services.IFlowAlarmService;
import com.venus.dbg.flowcollector.Services.IFlowAnalysisService;
import com.venus.dbg.flowcollector.Services.IFlowService;
import com.venus.dbg.flowcollector.Services.IFlowSourceService;
import com.venus.dbg.flowcollector.entity.FlowSourceEntity;
import com.venus.dbg.flowcollector.mapper.IFlowSourceMapper;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;

import java.sql.SQLOutput;
import java.util.List;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.test.context.junit4.SpringRunner;

//@RunWith(SpringRunner.class)
//@SpringBootTest
public class FlowCollectorApplicationTests {
	@Autowired
	private IFlowSourceService iFlowSourceService;
	@Autowired
	private IFlowService iFlowService;
	@Autowired
	private IFlowAlarmService iFlowAlarmService;
	@Autowired
	private IFlowAnalysisService iFlowAnalysisService;
	@Autowired
	private IFlowSourceMapper iFlowSourceMapper;
	@Test
	public void contextLoads() {
		List<FlowSourceEntity> flowSource = iFlowSourceService.query();
		System.out.println(flowSource.size());
	}

}
