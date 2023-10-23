import React from 'react';
import { View, StyleSheet,Text,ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const Analytics = () => {
   // Define usage details for mail, chat, and phone communication for different months.
    const mailUsageDetails = [
      // Usage details for mail communication.
        <Text key="january"><Text style={styles.boldText}>January:</Text> Increased mail communication due to New Year promotions.</Text>,
        <Text key="february"><Text style={styles.boldText}>February:</Text> Decreased mail communication as focus shifted to other channels.</Text>,
        <Text key="march"><Text style={styles.boldText}>March:</Text> Stable mail communication with regular updates and newsletters.</Text>,
        <Text key="april"><Text style={styles.boldText}>April:</Text> Higher mail communication for special discount offers.</Text>,
        <Text key="may"><Text style={styles.boldText}>May:</Text> Promotional emails resulted in increased mail communication.</Text>,
        <Text key="june"><Text style={styles.boldText}>June:</Text> Mail communication remained consistent with previous months.</Text>,
      ];
    
      const chatUsageDetails = [
        // Usage details for chat communication.
        <Text key="january"><Text style={styles.boldText}>January:</Text> High chat communication for handling support queries.</Text>,
        <Text key="february"><Text style={styles.boldText}>February:</Text> Decreased chat communication as fewer support tickets were received.</Text>,
        <Text key="march"><Text style={styles.boldText}>March:</Text> Surge in chat communication for new feature inquiries.</Text>,
        <Text key="april"><Text style={styles.boldText}>April:</Text> Chat communication increased for technical support.</Text>,
        <Text key="may"><Text style={styles.boldText}>May:</Text> Reduced chat communication due to resolved issues and FAQs.</Text>,
        <Text key="june"><Text style={styles.boldText}>June:</Text> Chat communication picked up with product launch events.</Text>,
      ];
    
      const phoneUsageDetails = [
        // Usage details for phone communication.
        <Text key="january"><Text style={styles.boldText}>January:</Text> Steady phone communication for product inquiries.</Text>,
        <Text key="february"><Text style={styles.boldText}>February:</Text> Phone communication increased for order-related questions.</Text>,
        <Text key="march"><Text style={styles.boldText}>March:</Text> Surge in phone communication due to service disruptions.</Text>,
        <Text key="april"><Text style={styles.boldText}>April:</Text> Phone communication remained stable with regular customer calls.</Text>,
        <Text key="may"><Text style={styles.boldText}>May:</Text> Increased phone communication for sales and discounts.</Text>,
        <Text key="june"><Text style={styles.boldText}>June:</Text> Phone communication decreased as chat and mail channels gained popularity.</Text>,
      ];

      // Define data and styling for the mail communication chart.
  const mailChartData = {
    // Chart data for mail communication.
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };
  // Define data and styling for the chat communication chart.
  const chatChartData = {
    // Chart data for chat communication.
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [50, 28, 70, 45, 60, 75],
        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  // Define data and styling for the phone communication chart.
  const phoneChartData = {
    // Chart data for phone communication.
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [30, 65, 40, 90, 55, 70],
        color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`, 
        strokeWidth: 2,
      },
    ],

  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.sectionTitle}>Mail Communication</Text>
      
      <View style={styles.chartContainer}>
        <LineChart
          data={mailChartData}
          width={350}
          height={220}
          yAxisLabel={'$'}
          chartConfig={chartConfig}
          style={styles.chart}
        />
      </View>
      {mailUsageDetails.map((detail, index) => (
        <Text key={index} style={styles.detailText}>
          {detail}
        </Text>
      ))}
      
      <Text style={styles.sectionTitle}>Chat Communication</Text>
      
      <View style={styles.chartContainer}>
        <LineChart
          data={chatChartData}
          width={350}
          height={220}
          yAxisLabel={'$'}
          chartConfig={chartConfig}
          style={styles.chart}
        />
      </View>
      {chatUsageDetails.map((detail, index) => (
        <Text key={index} style={styles.detailText}>
          {detail}
        </Text>
      ))}

    <Text style={styles.sectionTitle}>Phone Communication</Text>
      <View style={styles.chartContainer}>
        <LineChart
          data={phoneChartData}
          width={350}
          height={220}
          yAxisLabel={'$'}
          chartConfig={chartConfig}
          style={styles.chart}
        />
      </View>
      {phoneUsageDetails.map((detail, index) => (
        <Text key={index} style={styles.detailText}>
          {detail}
        </Text>
      ))}
    </ScrollView>
  );

};


// Configuration for chart styles.
const chartConfig = {
  // Chart styling and configuration.
  backgroundColor: '#ffffff',
  backgroundGradientFrom: '#ffffff',
  backgroundGradientTo: '#ffffff',
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: {
    borderRadius: 16,
  },
};


// Define styles using StyleSheet.
const styles = StyleSheet.create({
  // Styles for various components in the component.
    container: {
      justifyContent: 'center',
      padding: 16,
      backgroundColor: '#f5f5f5',
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      marginTop:10,
      textAlign:'center'
    },
    detailText: {
      marginBottom: 10,
      fontSize: 11,
      
    },
    chartContainer: {
      marginVertical: 20,
    },
    chart: {
      marginVertical: 8,
      borderRadius: 16,
    },
    boldText: {
        fontWeight: 'bold',
      },
  });

export default Analytics;
